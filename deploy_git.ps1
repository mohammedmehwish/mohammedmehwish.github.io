$git = "C:\Users\mehwish\MinGit\cmd\git.exe"
$repoDir = "C:\Users\mehwish\.gemini\antigravity\scratch\mehwish-portfolio"

Set-Location $repoDir

if (Test-Path "$repoDir\download_git.ps1") {
    Remove-Item "$repoDir\download_git.ps1" -Force
}

Write-Host "1. Initializing Git Repository..."
& $git init

Write-Host "2. Configuring Git User..."
& $git config user.name "Mohammed Mehwish V M"
& $git config user.email "michumehwish2004@gmail.com"

Write-Host "3. Staging All Files..."
& $git add .

Write-Host "4. Creating Commit..."
& $git commit -m "feat: initial commit - modern robotics portfolio website for Mohammed Mehwish V M"

Write-Host "5. Setting Branch to main..."
& $git branch -M main

Write-Host "6. Configuring Remote Repository..."
& $git remote remove origin 2>$null
& $git remote add origin https://github.com/mohammedmehwish/mohammedmehwish.github.io.git

Write-Host "7. Pushing to GitHub..."
& $git push -u origin main
