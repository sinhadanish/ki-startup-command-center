.PHONY: help setup dev stop clean backup ki-setup git-status git-push git-pull

help:
	@echo "🚀 Ki: Relationship Intelligence Platform"
	@echo ""
	@echo "Development Commands:"
	@echo "setup        - Complete setup (Ki platform + n8n + automation)"
	@echo "dev          - Start complete development environment"
	@echo "ki-setup     - Setup Ki platform specifically"
	@echo "stop         - Stop all services"
	@echo "n8n          - Open n8n automation dashboard"
	@echo "backup       - Backup everything"
	@echo "clean        - Clean up everything"
	@echo ""
	@echo "Git Commands:"
	@echo "git-status   - Check status of all submodules"
	@echo "git-push     - Push changes in all submodules + main repo"
	@echo "git-pull     - Pull latest changes from all repositories"

setup:
	@echo "📦 Setting up Ki relationship intelligence platform..."
	@git submodule update --init --recursive
	@$(MAKE) ki-setup
	@./scripts/setup.sh
	@echo "✅ Setup complete!"
	@echo ""
	@echo "🌐 Marketing: http://localhost:3000"
	@echo "💕 Ki App: http://localhost:3001"
	@echo "🔧 API: http://localhost:8000"
	@echo "🤖 n8n: http://localhost:5678"
	@echo ""
	@echo "Run 'make dev' to start development"

ki-setup:
	@echo "⚡ Setting up Ki platform..."
	@cd submodules/product/ki-platform && pnpm install
	@cd submodules/product/ki-platform && cp .env.example .env.local
	@echo "✅ Ki platform ready!"

dev:
	@echo "🏃 Starting Ki relationship intelligence platform..."
	@docker-compose up -d
	@echo ""
	@echo "🌐 Marketing Website: http://localhost:3000"
	@echo "💕 Ki App (Main Platform): http://localhost:3001"
	@echo "🔧 AI Engine API: http://localhost:8000"
	@echo "🤖 n8n Automation: http://localhost:5678 (admin/ki2024)"
	@echo ""
	@echo "💕 Ki is ready to help couples connect!"

stop:
	@echo "⏹️ Stopping all services..."
	@docker-compose down

n8n:
	@echo "🤖 Opening n8n automation dashboard..."
	@open http://localhost:5678

backup:
	@echo "💾 Creating backup..."
	@./scripts/backup.sh

clean:
	@echo "🧹 Cleaning up..."
	@docker-compose down -v
	@cd submodules/product/ki-platform && rm -rf node_modules .next || true
	@docker system prune -f

# Git automation commands
git-status:
	@echo "📊 Checking git status across all repositories..."
	@./scripts/git-submodule-status.sh

git-push:
	@echo "⬆️ Pushing changes to all repositories..."
	@./scripts/git-submodule-push.sh

git-pull:
	@echo "⬇️ Pulling latest changes from all repositories..."
	@./scripts/git-submodule-pull.sh