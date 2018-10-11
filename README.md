# Applitools Storybook Angular Tutorial

Please see [https://applitools.com/tutorials/storybook-angular.html](https://applitools.com/tutorials/storybook-angular.html)

## Creating a new Angular project, adding Storybook and adding Applitools SDK from scratch

### Create angular cli and create a sample project
 sudo npm install -g @angular/cli
 ng new tutorial-storybook-angular
 cd tutorial-storybook-angular/


### Add Storybook executable
Installs storybook executable. We can use this to automatically add Storybook deps and configs to existing projects

 sudo npm i -g @storybook/cli@v4.0.0-alpha.24
 cd tutorial-storybook-angular
 storybook init //this adds all the stuff we Storybook needs to the project
 storybook start //start storybook server


### Adding Applitools eyes
 npm install @applitools/eyes.storybook@beta --save-dev
 npx eyes-storybook