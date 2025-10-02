# Variables - CHANGE THESE
$projectName = "scptechnet-demo"
$githubUser = "sandrocp13"
$githubRepo = "sandrocp13/scptech-webapp"
$azureResourceGroup = "scptechnet-demo-rg"
$azureLocation = "northcentralus"
$staticWebAppName = "scptechnet-demo-app"

# 1. Create React app with Vite
npm create vite@latest $projectName -- --template react
cd $projectName

# 2. Initialize Git and push to GitHub
git init
git add .
git commit -m "Initial commit"
gh repo create $githubUser/$githubRepo --public --source=. --remote=origin --push

# 3. Create Azure Resource Group
az group create --name $azureResourceGroup --location $azureLocation

# 4. Create Azure Static Web App (build preset for React)
az staticwebapp create `
  --name $staticWebAppName `
  --resource-group $azureResourceGroup `
  --source "https://github.com/$githubUser/$githubRepo" `
  --location $azureLocation `
  --branch "main" `
  --app-location "/" `
  --output-location "dist" `
  --sku Free

# 5. Document the process in README.md
@"
# SCPTech Net Demo Environment

## Automated Setup Steps

1. **Create React app**  
   \`npm create vite@latest $projectName -- --template react\`

2. **Initialize Git and push to GitHub**  
   \`git init\`  
   \`git add .\`  
   \`git commit -m "Initial commit"\`  
   \`gh repo create $githubUser/$githubRepo --public --source=. --remote=origin --push\`

3. **Create Azure Resource Group**  
   \`az group create --name $azureResourceGroup --location $azureLocation\`

4. **Create Azure Static Web App**  
   \`az staticwebapp create --name $staticWebAppName --resource-group $azureResourceGroup --source "https://github.com/$githubUser/$githubRepo" --location $azureLocation --branch "main" --app-location "/" --output-location "dist" --sku Free\`

5. **Customize your site**  
   Edit files in the \`src\` folder to match your SCPTech Net branding and requirements.

6. **Push changes to GitHub**  
   \`git add .\`  
   \`git commit -m "Update site"\`  
   \`git push\`

7. **Your site will auto-deploy to Azure Static Web Apps!**

---
"@ | Out-File -Encoding utf8 README.md

git add README.md
git commit -m "Add setup documentation"
git push
