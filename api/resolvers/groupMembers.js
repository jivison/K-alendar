const { GroupMember, Artist } = require("../database/models");
const { create, all, destroy, update, one } = require("./utils");

const groupMemberIncludes = [
  { model: Artist, as: "member" },
  { model: Artist, as: "group" }
] ;

module.exports = {
  types: {},

  queries: {
    groupMembers: all(GroupMember, groupMemberIncludes),
    groupMember: one(GroupMember, groupMemberIncludes)
  },

  mutations: {
    addMemberToGroup: create(GroupMember, groupMemberIncludes),
    updateMemberInGroup: update(GroupMember, groupMemberIncludes),
    removeMemberFromGroup: destroy(GroupMember)
  }
};
