module.exports = function setupNews (NewsModel, UserModel) {
    async function findByAgentUuid (uuid) {
      return NewsModel.findAll({
        attributes: [ 'type' ],
        group: [ 'type' ],
        include: [{
          attributes: [],
          model: UserModel,
          where: {
            uuid
          }
        }],
        raw: true
      })
    }
  
    async function findByTypeAgentUuid (type, uuid) {
      return NewsModel.findAll({
        attributes: [ 'id', 'type', 'value', 'createdAt' ],
        where: {
          type
        },
        limit: 20,
        order: [[ 'createdAt', 'DESC' ]],
        include: [{
          attributes: [],
          model: UserModel,
          where: {
            uuid
          }
        }],
        raw: true
      })
    }
  
    async function create (uuid, metric) {
      const agent = await UserModel.findOne({
        where: { uuid }
      })
  
      if (agent) {
        Object.assign(metric, { agentId: agent.id })
        const result = await NewsModel.create(metric)
        return result.toJSON()
      }
    }
  
    return {
      create,
      findByAgentUuid,
      findByTypeAgentUuid
    }
  }