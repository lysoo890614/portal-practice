DEPLOY_PATH="/home/ec2-user/portal"
DEPLOY_DIR="portal-source"

pm2 delete index
rm -rf ${DEPLOY_PATH}/${DEPLOY_DIR}