1. curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
   1. this will create apt sources list file for node 14
   2. "bash -", - means stdin
      1. eg: ls -l | diff - old_ls.txt
2. apt -y install nodejs
   1. check with node -v
