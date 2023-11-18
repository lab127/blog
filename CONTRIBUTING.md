# CONTRIBUTING

#### Fork the repo

Fork this repository by clicking on the fork button on the top of this page. This will create a copy of this repository in your account. You can also give it mane

### Clone your fork

Now clone the forked repository from your github account to your machine.

```bash
git clone "url you just copied"
```

for example:

```bash
git clone git@github.com:this-is-you/your-repo.git
```

#### Create a branch

```bash
git switch -c your-branch
```

you can swich branch without `-c` flag

#### Do your work and make changes

push to your github branch

```bash
git push -u origin your-branch-name
```

#### Add upstream

check your remote url

```bash
git remote -v
```

add upstream

```bash
git add remote add upstream git@github.com:forked-from/repo-name.git
```

`forked-from` is username from project and `repo-name` is repository name where project from

for example:

```bash
git add remote add upstream git@github.com:lab127/nextjs-blog-porfolio.git
```

#### Update to newest forked

```bash
git pull upstream main
```
