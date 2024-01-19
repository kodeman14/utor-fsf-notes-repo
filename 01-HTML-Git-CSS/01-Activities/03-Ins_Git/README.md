#  Instructor Demo: Git

* It is important to be able to store and manage code as well as share it with others. In this class, we will be using a tool called Github.

* Open [Github](https://github.com/) in your browser.

  * In this class, we will share code in repositories using Github.

  * Click on the `new` button to demonstrate how to create a new repository.

  * Select your profile from the “Owner” dropdown menu and give the new repository the name `first-day-demo`.

  * Select the "Add a README file" option to have GitHub create a new `README.md` file when creating the repository.

  * Click on `create repository`.

  * While the remote repo is now created, we need to pull down the repository to our machine to make changes to it.

  * Click on the `code` button and select the SSH option under clone to copy the URL.

* Open up a terminal on your machine.

  * 🔑 We use the terminal command `cd` to navigate to the directory where we want the repository located.

  ```bash
  cd Desktop
  ```

  * 🔑 We use the git command `git clone` followed by the URL copied from Github to clone the repo to our machine.

  ```bash
  git clone <url>
  ```

  * 🔑 The `git clone` command creates a new directory with the same name as the repository. We navigate into our new directory using `cd`.

  ```bash
  cd first-day-demo
  ```

  * 🔑 We add an HTML file to our local repo using `touch`.

  ```bash
  touch index.html
  ```

  * 🔑 We use `git add` to add our changes.

  ```bash
  git add -A
  ```

  * 🔑 To commit our changes, we use `git commit -m` with a commit message.

  ```bash
  git commit -m "First commit"
  ```

  * 🔑 To push our changes back up to the repo we created on Github, we use `git push`.

  ```bash
  git push origin main
  ```

  * 🔑 It is important that we keep our local repo up-to-date. To pull down any changes from the repo we created on Github and update the repo on our local machine, we use git pull. The origin refers to the repo that we cloned and main is the branch. The default branch is main.

  ```bash
  git pull origin main
  ```

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
