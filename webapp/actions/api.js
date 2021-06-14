import axios from 'axios'

// ====== USER  ======
export const apiCreateUser = (user) => {
  return axios.post(`/api/v1/user`, user)
}
export const apiLoginUser = (data) => {
  return axios.post(`/api/v1/user/auth`, data)
}
export const apiGetMe = () => {
  return axios.get(`/api/v1/user/profile`)
}
export const apiGetUnreadMessages = () => {
  return axios.get(`/api/v1/unreadMessages`)
}
export const apiGetUserById = (id) => {
  return axios.get(`/api/v1/user/${id}`)
}
export const apiEditMe = (user) => {
  return axios.put(`/api/v1/user/profile`, user)
}
export const apiEditProfilePhoto = (id, data) => {
  return axios.post(`/api/v1/user/${id}/profilePhoto`, data)
}
export const apiDeleteProfilePhoto = (id, data) => {
  return axios.delete(`/api/v1/user/${id}/profilePhoto`)
}
export const apiGetListUserOffers = (id) => {
  return axios.get(`/api/v1/user/${id}/offers`)
}
export const apiGetListUserOffersLiked = () => {
  return axios.get(`/api/v1/user/myLikeOffers`)
}
export const apiChangePassword = (data) => {
  return axios.put(`/api/v1/user/updatePassword`, data)
}
export const apiKyc = (data) => {
  return axios.put(`/api/v1/user/documents`, data)
}
export const apiGoogleLogin = () => {
  return axios.get(`/api/v1/user/auth/google`)
}
export const apiSendProfilePhotos = (data) => {
  return axios.post(`/api/v1/user/photo`, data)
}
export const apiGetProfilePhotos = (data) => {
  return axios.get(`/api/v1/user/photo`)
}
export const apiRemoveProfilePhoto = (id) => {
  return axios.delete(`/api/v1/user/photo/${id}`)
}
export const apiSendProfileCoverPhoto = (id) => {
  return axios.put(`/api/v1/user/photo/${id}/coverPhoto`)
}

// =====================

// ====== PROGRAMMER  ======
export const apiCreateProgrammer = (data) => {
  return axios.post(`/api/v1/user/programmer`, data)
}
export const apiGetProgrammerCategories = () => {
  return axios.get(`/api/v1/user/programmerCategories`)
}
export const apiGetParamsCategory = (category) => {
  return axios.get(`/api/v1/admin/frontCategories?category=${category}`)
}
// =====================

// ====== COMPANY  ======
export const apiCreateCompany = (data) => {
  return axios.post(`/api/v1/user/organiser`, data)
}
// =====================

// ====== OFFER  ======
export const apiCreateOffer = (data) => {
  return axios.post(`/api/v1/offer`, data)
}
export const apiEditOffer = (id, data) => {
  return axios.put(`/api/v1/offer/${id}`, data)
}
export const apiDeleteOffer = (id) => {
  return axios.delete(`/api/v1/offer/${id}`)
}
export const apiGetOfferById = (id) => {
  return axios.get(`/api/v1/offer/${id}`)
}
export const apiGetListOffers = (params) => {
  if (!params) params = {}
  return axios.get(
    `/api/v1/client/offer?search=${params.search || ''}&from=${params.from || ''}&to=${
      params.to || ''
    }&country=${params.country || ''}&last=${params.last || ''}&type=${params.type || ''}`,
  )
}
export const apiGetPopularCategories = () => {
  return axios.get(`/api/v1/offers/popularCategories`)
}
export const apiCreateOfferParams = (id, obj) => {
  return axios.put(`/api/v1/offer/${id}/categoryOptions`, obj)
}
export const apiGetOfferPhoto = (id) => {
  return axios.get(`/api/v1/offer/details/photo?offerId=${id}`)
}
export const apiRemoveOfferPhoto = (id) => {
  return axios.delete(`/api/v1/offer/details/photo/${id}`)
}
export const apiEditOfferPhoto = (data) => {
  return axios.put(`/api/v1/offer/details/photo/${data.id}`, data)
}
export const apiSetOfferCoverPhoto = (offerId, data) => {
  return axios.put(`/api/v1/offer/${offerId}/setAvatar`, data)
}
export const apiGetEventTypes = () => {
  return axios.get(`/api/v1/user/eventTypes`)
}
export const apiCreateEventOffer = (data) => {
  return axios.post(`/api/v1/offer/event`, data)
}
export const apiOfferPhotos = (data) => {
  return axios.post(`/api/v1/offer/details/photo`, data)
}
export const apiOfferRegulations = (data) => {
  return axios.put(`/api/v1/offer/${data.offerId}/regulations`, data)
}
export const apiAddPerformanceDetails = (data) => {
  return axios.put(`/api/v1/offer/${data.offerId}/performanceDetails`, data)
}

export const apiOfferCreateCalendar = (data) => {
  return axios.post(`/api/v1/offer/${data.offerId}/calendar`, data)
}
export const apiOfferUpdateDisabled = (data) => {
  return axios.post(`/api/v1/offer/${data.offerId}/calendar/disabledDays`, data)
}
export const apiOfferCreatePrice = (data) => {
  return axios.put(`/api/v1/offer/${data.offerId}/price`, data)
}
export const apiOfferCreateDiscounts = (data) => {
  return axios.put(`/api/v1/offer/${data.offerId}/discounts`, data)
}
export const apiSendInvitatons = (id, list) => {
  return axios.post(`/api/v1/offer/${id}/inviteParticipants`, list)
}
export const apiReservOffer = (id, data) => {
  return axios.put(`/api/v1/client/${id}/reservation`, data)
}
export const apiCloneOffer = (id) => {
  return axios.post(`/api/v1/offer/copyOffer`, { id: id })
}
export const apiCreateChatOffer = (offerId, text) => {
  return axios.post(`/api/v1/preChat`, { offerId: offerId, text: text })
}
export const apiOfferLike = (offerId) => {
  return axios.post(`/api/v1/user/${offerId}/like `)
}
export const apiGetOfferReviews = (offerId) => {
  return axios.get(`/api/v1/user/offer/${offerId}/reviews`)
}
export const apiJoinToOffer = (ioid) => {
  return axios.put(`/api/v1/user/confirmOffer`, { offerParticipantsId: ioid })
}

// =====================

// ====== CHAT  ======
export const apiGetListChats = (data) => {
  return axios.get(`/api/v1/chats`)
}
export const apiGetChatById = (id) => {
  return axios.get(`/api/v1/chat/${id}`)
}
export const apiGetChatMessages = (id) => {
  return axios.get(`/api/v1/chat/${id}/messages`)
}
export const apiSendMessage = (chatId, data) => {
  return axios.post(`/api/v1/chat/${chatId}/messages`, data)
}
export const apiGetPreChat = (id) => {
  return axios.get(`/api/v1/preChat/${id}`)
}
export const apiGetPreChatMessages = (id) => {
  return axios.get(`/api/v1/preChat/${id}/messages`)
}
export const apiSendPreChatMessage = (chatId, data) => {
  return axios.post(`/api/v1/preChat/${chatId}/messages`, data)
}
export const apiReadMessages = (data) => {
  return axios.put(`/api/v1/chats/updateStatus`, { id: data })
}

// =====================

// BOOKING
export const apiApprove = (offerId, data) => {
  return axios.put(`/api/v1/offer/${offerId}/approve`, data)
}
export const apiDeclineBooking = (offerId, data) => {
  return axios.put(`/api/v1/offer/${offerId}/decline`, data)
}
export const apiSendReview = (bookingId, data) => {
  return axios.post(`/api/v1/client/${bookingId}/review`, data)
}

//========================

// ====== ADMIN  ======
export const apiAdminProgrammerCategories = (data) => {
  return axios.post(`/api/v1/admin/newUploadProgrammerCategories`, data)
}
export const apiAdminCategoriesParams = (id, data) => {
  return axios.post(`/api/v1/admin/frontCategories/csv/${id}`, data)
}
export const apiCreateEventType = (data) => {
  return axios.post(`/api/v1/admin/createEventTypes`, data)
}
export const apiCreateParam = (data) => {
  return axios.post(`/api/v1/admin/frontTemplates`, data)
}
export const apiEditParam = (data) => {
  return axios.put(`/api/v1/admin/frontTemplates`, data)
}
export const apiGetParams = (data) => {
  return axios.get(`/api/v1/admin/frontTemplates`, data)
}
export const apiGetFrontCategories = (data) => {
  return axios.get(`/api/v1/admin/frontCategoriesTemplates`, data)
}
export const apiEditCategoryTemplare = (data) => {
  return axios.put(`/api/v1/admin/frontCategoriesTemplates`, data)
}

// =====================
