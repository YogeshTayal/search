'use strict';

/**
 * @ngdoc function
 * @name searchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the searchApp
 */
angular.module('searchApp')
  .controller('MainCtrl', ['SearchDataService', '$scope', function (SearchData, $scope) {

    var self = this;
    this.selectedRow = -1;

    this.getUsers = function () {
      this.users = SearchData.getUsersData();
    };

    this.clear = function () {
      this.searchText = '';
    };

    this.keyPressed = function (e) {
      switch (e.which) {
        case 40:
          self.selectedRow = Math.min(self.selectedRow + 1, self.filteredUsers.length - 1);
          $scope.$broadcast('scroll', { selectedRow: self.selectedRow, direction: 'down' });
          break;
        case 38:
          self.selectedRow = Math.max(0, self.selectedRow - 1);
          $scope.$broadcast('scroll', { selectedRow: self.selectedRow, direction: 'up' });
          break;
        case 13:
          if (self.selectedRow > -1) {
            self.searchText = self.filteredUsers[self.selectedRow].name;
            self.selectedRow = -1;
          }
          break;
        default:
          self.selectedRow = -1;
          break;
      }
    };

    this.selectRow = function () {
      self.searchText = self.filteredUsers[self.selectedRow].name;
      self.selectedRow = -1;
    };

    this.hovered = function (index) {
      if (self.selectedRow !== index) {
        self.selectedRow = index;
      }
    };

    this.matchInItems = function (text, items) {
      if (text && items) {
        var lower = text.toLowerCase();
        for (var obj of items) {
          if (obj.toLowerCase().match(lower)) {
            return true;
          }
        }
        return false;
      }
      return false;
    };

  }]);
