import { getToken } from '../api/api'

var token = {
  savetoken: function (token) {
    sessionStorage.setItem("access_token", token.access_token);
    sessionStorage.setItem("enabled", token.enabled);
    sessionStorage.setItem("expires_in", token.expires_in);
    sessionStorage.setItem("refresh_token", token.refresh_token);
    sessionStorage.setItem("token_type", token.token_type);
    sessionStorage.setItem("scope", token.token_type);
  },
  saveCode: function (code) {
    sessionStorage.setItem("code", code);
  },
  saveUserInfo: function (userInfo) {
    sessionStorage.setItem("employeeId", userInfo.id);
    sessionStorage.setItem("employeeName", userInfo.username);
  },
  saveSelectedCompany: function (companyCode) {
    sessionStorage.setItem("contractBody", companyCode);
    sessionStorage.setItem("gsCode", companyCode);
  },
  deleteToken: function () {
    sessionStorage.setItem("access_token", null);
    sessionStorage.setItem("enabled", null);
    sessionStorage.setItem("expires_in", null);
    sessionStorage.setItem("refresh_token", null);
    sessionStorage.setItem("token_type", null);
    sessionStorage.setItem("employeeId", null);
    sessionStorage.setItem("employeeName", null);
    sessionStorage.setItem("contractBody", null);
    sessionStorage.setItem("gsCode", null);
  },
  loadToken: function () {
    let tokenInfo = {};
    tokenInfo.access_token = sessionStorage.getItem("access_token");
    tokenInfo.enabled = sessionStorage.getItem("enabled");
    tokenInfo.expires_in = sessionStorage.getItem("expires_in");
    tokenInfo.refresh_token = sessionStorage.getItem("refresh_token");
    tokenInfo.token_type = sessionStorage.getItem("token_type");
    tokenInfo.employeeId = sessionStorage.getItem("employeeId");
    tokenInfo.employeeName = sessionStorage.getItem("employeeName");
    tokenInfo.contractBody = sessionStorage.getItem("contractBody");
    tokenInfo.gsCode = sessionStorage.getItem("gsCode");
    return tokenInfo;
  },

  getTokenFromService: function (vue, code, response, error) {
    getToken(code, vue.$ajax)
      .then(response)
      .catch(error);
  }
}

export default token;
