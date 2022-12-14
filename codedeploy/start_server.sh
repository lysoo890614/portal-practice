DEPLOY_PATH="/home/ec2-user/portal"
DEPLOY_DIR="portal-source"

pm2 start ${DEPLOY_PATH}/${DEPLOY_DIR}/src/index.js