---
title: "Kubernetes in Action"
category: "books"
subcategory: "Development Tools"
description: "Master container orchestration with Kubernetes - Deploy, manage, and scale containerized applications"
units:
  - "Container Orchestration"
  - "DevOps"
  - "Cloud Native"
  - "Microservices"
recommendedFor:
  - "DevOps Engineers"
  - "Backend Developers"
  - "Cloud Engineers"
links:
  - name: "Access on Google Drive"
    url: "https://drive.google.com/file/d/1FXaT8k0dh0VFgeccz5Vj_attk-oreBk0/view?usp=sharing"
lastUpdated: "2026-02-06"
---

# Kubernetes in Action

**Author:** Marko Lukša  
**Focus:** Comprehensive guide to Kubernetes container orchestration

## Overview

Learn to deploy and manage containerized applications at scale using Kubernetes (K8s). From basic concepts to advanced patterns for production systems.

## What is Kubernetes?

> "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications."

**Key Benefits:**
- Automatic scaling
- Self-healing
- Load balancing
- Rolling updates
- Service discovery

## Core Concepts

### Pods

**The smallest deployable unit:**
- One or more containers
- Shared network namespace
- Shared storage volumes
- Ephemeral by nature

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: app
    image: nginx:latest
    ports:
    - containerPort: 80
```

### ReplicaSets

**Ensure desired number of pods:**
- Maintain specified replicas
- Replace failed pods
- Scaling up/down

### Deployments

**Declarative updates:**
- Rolling updates
- Rollback capability
- Version management
- Scaling strategies

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: web
        image: nginx:1.19
        ports:
        - containerPort: 80
```

### Services

**Network abstraction:**
- ClusterIP (internal)
- NodePort (external access)
- LoadBalancer (cloud LB)
- Headless (direct pod access)

```yaml
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  type: LoadBalancer
  selector:
    app: web
  ports:
  - port: 80
    targetPort: 80
```

## Kubernetes Architecture

### Control Plane Components

**API Server:**
- Entry point for all operations
- RESTful interface
- Authentication/authorization

**etcd:**
- Distributed key-value store
- Cluster state storage
- Configuration data

**Scheduler:**
- Assigns pods to nodes
- Resource optimization
- Affinity rules

**Controller Manager:**
- Maintains desired state
- Handles node failures
- Manages replication

### Node Components

**Kubelet:**
- Runs on each node
- Manages pod lifecycle
- Reports to API server

**Kube-proxy:**
- Network rules
- Service load balancing
- Connection forwarding

**Container Runtime:**
- Docker, containerd, CRI-O
- Runs containers

## Essential Kubernetes Objects

### ConfigMaps & Secrets

**ConfigMaps (non-sensitive config):**
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  database_url: "postgres://db:5432"
  log_level: "info"
```

**Secrets (sensitive data):**
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
data:
  password: cGFzc3dvcmQxMjM=  # base64 encoded
```

### Volumes

**Persistent storage:**
- EmptyDir (temporary)
- HostPath (node filesystem)
- PersistentVolumeClaim (PVC)
- Cloud storage (EBS, GCE PD)

### Namespaces

**Resource isolation:**
```bash
kubectl create namespace development
kubectl create namespace production
```

## Common kubectl Commands

### Basic Operations
```bash
# Get resources
kubectl get pods
kubectl get deployments
kubectl get services

# Describe resources
kubectl describe pod <name>
kubectl describe deployment <name>

# Create from file
kubectl apply -f deployment.yaml
kubectl create -f service.yaml

# Delete resources
kubectl delete pod <name>
kubectl delete -f deployment.yaml
```

### Debugging
```bash
# View logs
kubectl logs <pod-name>
kubectl logs -f <pod-name>  # Follow logs

# Execute commands
kubectl exec -it <pod-name> -- /bin/bash

# Port forwarding
kubectl port-forward <pod-name> 8080:80

# View events
kubectl get events
```

### Scaling
```bash
# Manual scaling
kubectl scale deployment web-app --replicas=5

# Autoscaling
kubectl autoscale deployment web-app --min=2 --max=10 --cpu-percent=80
```

## Deployment Strategies

### Rolling Update (Default)
```yaml
spec:
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
```

### Blue-Green Deployment
- Deploy new version alongside old
- Switch traffic when ready
- Quick rollback if needed

### Canary Deployment
- Gradual rollout to subset of users
- Monitor metrics
- Increase traffic incrementally

## Health Checks

### Liveness Probe
```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 8080
  initialDelaySeconds: 30
  periodSeconds: 10
```

### Readiness Probe
```yaml
readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5
```

## Resource Management

### Requests & Limits
```yaml
resources:
  requests:
    memory: "128Mi"
    cpu: "500m"
  limits:
    memory: "256Mi"
    cpu: "1000m"
```

**Requests:** Guaranteed resources  
**Limits:** Maximum resources

## Ingress

**HTTP/HTTPS routing:**
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: web-ingress
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-service
            port:
              number: 80
```

## Best Practices

### Configuration
✅ Use namespaces for isolation  
✅ Apply resource limits  
✅ Implement health checks  
✅ Use ConfigMaps/Secrets  
✅ Label everything consistently

### Security
✅ Use RBAC (Role-Based Access Control)  
✅ Network policies  
✅ Pod security policies  
✅ Scan images for vulnerabilities  
✅ Use secrets for sensitive data

### Operations
✅ Monitor cluster health  
✅ Set up logging (ELK, Fluentd)  
✅ Implement metrics (Prometheus)  
✅ Regular backups (etcd)  
✅ Document architecture

## Production Patterns

### StatefulSets
- For stateful applications
- Stable network identity
- Ordered deployment/scaling
- Persistent storage

### DaemonSets
- Run on all/selected nodes
- Logging agents
- Monitoring agents
- Node-level services

### Jobs & CronJobs
```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: backup
spec:
  schedule: "0 2 * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: backup
            image: backup-tool:latest
          restartPolicy: OnFailure
```

## Troubleshooting Guide

**Pod Not Starting:**
```bash
kubectl describe pod <name>
kubectl logs <name>
kubectl get events
```

**Service Not Accessible:**
```bash
kubectl get svc
kubectl describe svc <name>
kubectl get endpoints <name>
```

**Resource Issues:**
```bash
kubectl top nodes
kubectl top pods
kubectl describe node <name>
```

## Helm (Package Manager)

**Install applications:**
```bash
helm install my-app stable/mysql
helm upgrade my-app stable/mysql
helm rollback my-app
helm uninstall my-app
```

## Learning Path

**Week 1:** Core concepts (Pods, Deployments, Services)  
**Week 2:** Storage & Configuration (Volumes, ConfigMaps)  
**Week 3:** Advanced topics (StatefulSets, Ingress)  
**Week 4:** Production patterns (Monitoring, Security)

---

**Bottom Line:** Kubernetes is the industry standard for container orchestration. Master it to deploy and manage modern cloud-native applications at any scale.