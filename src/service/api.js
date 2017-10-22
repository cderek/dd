import fetch from '../lib/fetch'

export const topicRecommend = () => fetch('/1.0/topicRecommendations/get')

export const messageRecommend = () => fetch('/1.0/web/listRecommendMessages')

export const popularPersonalUpdate = () => fetch('/1.0/personalUpdate/listPopular', {}, 'POST')

export const mediaMeta = messageId => fetch('/1.0/misc/getMediaMeta', {
  messageId
})

export const getHotComments = messageId => fetch('/1.0/messageComments/listHotComments', {
  messageId
})

export const sharePage = id => fetch('/1.0/messages/getForSharePage', {
  id
})

export const topicDetail = topicId => fetch('/1.0/messages/showDetail', {
  topicId
})

export const getSimilarTopics = id => fetch('/1.0/topics/listSimilarTopics', {
  id
})
