
# Gerando um build para o deploy no GitHub Pages:
    ng build --prod --base-href "https://journey-dev-br.github.io/journey-web/"

# Deployando no GitHub Pages:
    ngh --branch=gh-pages




# URL do site publicado no GitHub Pages:
    https://journey-dev-br.github.io/journey-web/

# INSTALAÇÃO INICIAL DO GH-PAGES:
# ==============================

# Instalar o gh-pages:
    ng add angular-cli-ghpages

# Alterar no angular.json:
    "outputPath": "dist/work-dev-br",
#   para
    "outputPath": "dist",
