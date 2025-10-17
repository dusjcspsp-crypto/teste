import os
import subprocess
import signal
import time
import requests
from flask import Flask, request, jsonify, send_from_directory, Response
from flask_cors import CORS
import threading
import atexit

app = Flask(__name__)
CORS(app)

# Configurações
NESTJS_PORT = 3001
NESTJS_URL = f"http://localhost:{NESTJS_PORT}"
FRONTEND_DIR = os.path.join(os.path.dirname(__file__), '..', 'frontend', 'dist')

# Processo do NestJS
nestjs_process = None

def start_nestjs():
    """Inicia o servidor NestJS em background"""
    global nestjs_process
    backend_dir = os.path.join(os.path.dirname(__file__), '..', 'backend')
    
    # Definir a porta para o NestJS
    env = os.environ.copy()
    env['PORT'] = str(NESTJS_PORT)
    
    try:
        nestjs_process = subprocess.Popen(
            ['npm', 'run', 'start:prod'],
            cwd=backend_dir,
            env=env,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )
        
        # Aguardar o servidor iniciar
        for _ in range(30):  # Aguardar até 30 segundos
            try:
                response = requests.get(f"{NESTJS_URL}/customers", timeout=1)
                if response.status_code in [200, 404]:  # 404 é ok, significa que o servidor está rodando
                    print(f"NestJS server started on port {NESTJS_PORT}")
                    return True
            except:
                time.sleep(1)
        
        print("Failed to start NestJS server")
        return False
    except Exception as e:
        print(f"Error starting NestJS: {e}")
        return False

def stop_nestjs():
    """Para o servidor NestJS"""
    global nestjs_process
    if nestjs_process:
        nestjs_process.terminate()
        nestjs_process.wait()

# Registrar cleanup
atexit.register(stop_nestjs)

# Proxy para API do NestJS
@app.route('/api/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
def proxy_api(path):
    """Proxy todas as requisições da API para o NestJS"""
    try:
        url = f"{NESTJS_URL}/{path}"
        
        # Preparar dados da requisição
        data = request.get_data()
        headers = {key: value for key, value in request.headers if key != 'Host'}
        
        # Fazer a requisição para o NestJS
        response = requests.request(
            method=request.method,
            url=url,
            headers=headers,
            data=data,
            params=request.args,
            timeout=30
        )
        
        # Retornar a resposta
        return Response(
            response.content,
            status=response.status_code,
            headers=dict(response.headers)
        )
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Rotas diretas para a API (sem /api prefix)
@app.route('/customers', methods=['GET', 'POST'])
@app.route('/customers/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
def proxy_customers(path=''):
    return proxy_api(f"customers/{path}" if path else "customers")

@app.route('/vehicles', methods=['GET', 'POST'])
@app.route('/vehicles/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
def proxy_vehicles(path=''):
    return proxy_api(f"vehicles/{path}" if path else "vehicles")

@app.route('/budgets', methods=['GET', 'POST'])
@app.route('/budgets/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
def proxy_budgets(path=''):
    return proxy_api(f"budgets/{path}" if path else "budgets")

@app.route('/employees', methods=['GET', 'POST'])
@app.route('/employees/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
def proxy_employees(path=''):
    return proxy_api(f"employees/{path}" if path else "employees")

@app.route('/products', methods=['GET', 'POST'])
@app.route('/products/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
def proxy_products(path=''):
    return proxy_api(f"products/{path}" if path else "products")

@app.route('/services', methods=['GET', 'POST'])
@app.route('/services/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
def proxy_services(path=''):
    return proxy_api(f"services/{path}" if path else "services")

@app.route('/locations', methods=['GET', 'POST'])
@app.route('/locations/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
def proxy_locations(path=''):
    return proxy_api(f"locations/{path}" if path else "locations")

@app.route('/schedules', methods=['GET', 'POST'])
@app.route('/schedules/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
def proxy_schedules(path=''):
    return proxy_api(f"schedules/{path}" if path else "schedules")

@app.route('/inventory', methods=['GET', 'POST'])
@app.route('/inventory/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
def proxy_inventory(path=''):
    return proxy_api(f"inventory/{path}" if path else "inventory")

@app.route('/financeiro', methods=['GET', 'POST'])
@app.route('/financeiro/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
def proxy_financeiro(path=''):
    return proxy_api(f"financeiro/{path}" if path else "financeiro")

@app.route('/tools', methods=['GET', 'POST'])
@app.route('/tools/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
def proxy_tools(path=''):
    return proxy_api(f"tools/{path}" if path else "tools")

@app.route('/catalog', methods=['GET', 'POST'])
@app.route('/catalog/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
def proxy_catalog(path=''):
    return proxy_api(f"catalog/{path}" if path else "catalog")

# Servir arquivos estáticos do frontend
@app.route('/assets/<path:filename>')
def serve_assets(filename):
    """Serve arquivos estáticos (CSS, JS, etc.)"""
    return send_from_directory(os.path.join(FRONTEND_DIR, 'assets'), filename)

@app.route('/favicon.ico')
def serve_favicon():
    """Serve o favicon"""
    return send_from_directory(FRONTEND_DIR, 'favicon.ico')

# Rota principal - serve o index.html para todas as rotas não-API
@app.route('/')
@app.route('/<path:path>')
def serve_frontend(path=''):
    """Serve o frontend React para todas as rotas que não são API"""
    # Se for uma rota de API que não foi capturada, retornar 404
    if path.startswith('api/'):
        return jsonify({"error": "API endpoint not found"}), 404
    
    # Para todas as outras rotas, servir o index.html (SPA routing)
    return send_from_directory(FRONTEND_DIR, 'index.html')

@app.route('/health')
def health_check():
    """Health check endpoint"""
    try:
        # Verificar se o NestJS está respondendo
        response = requests.get(f"{NESTJS_URL}/customers", timeout=5)
        nestjs_status = "ok" if response.status_code in [200, 404] else "error"
    except:
        nestjs_status = "error"
    
    return jsonify({
        "status": "ok",
        "nestjs": nestjs_status,
        "frontend": "ok" if os.path.exists(FRONTEND_DIR) else "error"
    })

if __name__ == '__main__':
    print("Starting AppPremium application...")
    
    # Iniciar o NestJS em background
    if start_nestjs():
        print("Flask wrapper starting on port 5000...")
        app.run(host='0.0.0.0', port=5000, debug=False)
    else:
        print("Failed to start NestJS backend")
        exit(1)
