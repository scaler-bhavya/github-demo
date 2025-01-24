# Use a Python base image
FROM python:3.9

# Set the working directory
WORKDIR /app

# Copy application code and dependencies
COPY . .

# Install Python dependencies
RUN pip install -r requirements.txt

# Run the Python application
CMD ["python", "app.py"]
