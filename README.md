# Dual Server Setup Using Tailscale

> “Every child dreams of building something that keeps their data safe and secure.”  
> This project is my take on that dream — combining two different secure server setups using Tailscale.

## 🌐 Overview

This project showcases **two different server setups** powered by **Tailscale** to securely access data and media from anywhere.

- **Method 1:** A **custom HTML/CSS/JS server** for creating a lightweight front-end accessible via Tailscale.
- **Method 2:** Integration of **Tailscale with Jellyfin**, allowing for secure and private media streaming.

Both methods demonstrate how Tailscale’s mesh VPN can be used in different ways to protect and manage personal data.

---

## 🔐 Why Tailscale?

Tailscale creates a secure, encrypted network between your devices using WireGuard. No port forwarding. No complicated firewall rules. Just private, easy access.

---

## 🚀 Server Methods

### 🖥️ Method 1 – Custom Front-End Server

- Built using HTML, CSS, and JavaScript
- Run locally and access via your Tailscale IP
- Useful for dashboards, static pages, or personal web apps

📁 Folder: `method-1-custom-server/`

### 📺 Method 2 – Tailscale + Jellyfin

- Jellyfin is an open-source media server
- Paired with Tailscale for secure remote access to your media library
- No need to expose ports or use a public IP

📁 Folder: `method-2-jellyfin-server/`

---

## 📁 Repository Structure

