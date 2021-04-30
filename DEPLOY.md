
# Gerando um build e deploy no GitHub Pages:
    ng deploy --cname=journey.dev.br




# URL do site publicado no GitHub Pages:
    https://journey-dev-br.github.io/journey-web/
    https://journey.dev.br

# INSTALAÇÃO INICIAL DO GH-PAGES:
# ==============================

# Instalar o gh-pages:
    ng add angular-cli-ghpages

# Alterar no angular.json:
    "outputPath": "dist/work-dev-br",
#   para
    "outputPath": "dist",

# INSTALAÇÃO INICIAL DO GH-PAGES:
# ==============================

# Gerando um build para o deploy no GitHub Pages:
    ng build --prod --base-href "https://journey-dev-br.github.io/journey-web/"

# Deployando no GitHub Pages:
    ngh --branch=gh-pages

