#!/bin/bash
# Remember to make this script executable with "cdhmod +x docker-production.sh" inside this parent folder.

# Define the paths to your Docker Compose files
compose_file="./docker/production/docker-compose.yml"

# Prompt the user to choose an action
echo "Choose an action:"
echo "1. Build and Start Docker container"
echo "2. Start Docker container"
read -p "Enter the number of your choice: " choice

# Check the user's choice and perform the corresponding action
case $choice in
  1)
    # Build Docker container
    docker-compose -f "$compose_file" build
    if [ $? -eq 0 ]; then
      echo "Container built successfully."
      docker-compose -f "$compose_file" up
    else
      echo "Error building the container."
    fi
    ;;
  2)
    # Start Docker container
    docker-compose -f "$compose_file" up
    ;;
  *)
    echo "Invalid choice. Exiting."
    ;;
esac