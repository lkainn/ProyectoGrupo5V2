import secrets

# Generar una clave secreta aleatoria de 64 bytes (512 bits)
secret_key = secrets.token_hex(64)

# Imprimir la clave secreta generada
print(secret_key)