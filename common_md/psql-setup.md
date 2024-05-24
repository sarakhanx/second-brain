**using code down below to setup Docker Compose File**
```yml
version: '3.8'

services:
  postgres:
    image: postgres:16
    container_name: postgres_container
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB}
      PGDATA: /var/lib/postgresql/data
    volumes:
      - ./postgres_data:/var/lib/postgresql/data
    ports:
      - "5433:5432"
    restart: always
  
  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin_container
    environment:
      PGADMIN_DEFAULT_EMAIL: ${PGADMIN_DEFAULT_EMAIL}
      PGADMIN_DEFAULT_PASSWORD: ${PGADMIN_DEFAULT_PASSWORD}
      PGADMIN_LISTEN_PORT: ${PGADMIN_LISTEN_PORT}
    volumes:
      - ./pgadmin_data:/var/lib/pgadmin
    ports:
      - "${PGADMIN_LISTEN_PORT}:5050"
    restart: always

networks:
  postgresql:
    driver: bridge

volumes:
  postgres_data:
  pgadmin_data:
```

**Make .env File**
```bash
PGADMIN_LISTEN_PORT=5050

POSTGRES_USER=admin

POSTGRES_PASSWORD=admin

POSTGRES_DB=whalewks

PGADMIN_DEFAULT_EMAIL=sarawut.khan@hotmail.com

PGADMIN_DEFAULT_PASSWORD=admin
```

**Using Command**
```bash
docker compose up --build -d
```

##### Add Server To pgAdmin
> Docker Compose just create the container of pgAdmin and psql for us
> we need to *add server from port 5433 to pgAdmin ourself*

1. Navigate to `add server` section
2. Input by follow this
	- - **General Tab:**
	        - Name: PostgreSQL
	    - **Connection Tab:**
	        - Hostname/Address: `postgres_container` (or the IP address of the container if you're using a custom network)
	        - Port: `5432`
	        - Username: `admin` (as per your `.env` file)
	        - Password: `admin` (as per your `.env` file)
	- Click "Save" to add the server.

---
##### BONUS
1. **access container**
```bash
docker exec -it postgres_container psql -U admin -d whalewks
```
%% explanation : `-it <name of container> psql -U <username> -d <database name>` %%

2. **create basic table**
```SQL
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Sessions (
    session_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    session_token VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users (user_id) ON DELETE CASCADE
);
```