export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "Marco Colacicco & Chantelle Kaderli's Friend Tracker",
            "formList": [
                {
 "id": "GroupForm",
 "title": "Group",
 "url": "/group",
 "formFieldList": [
 {
 "id": "name",
 "type": "text",
 "name": "GroupName",
 "width": 2,
 "required": true
 },
 {
 "type": "deleteButton",
 "name": "Delete"
 },
 {
 "type": "cancelButton",
 "name": "Cancel"
 },
 {
 "type": "okButton",
 "name": "Ok"
 }
 ]
},
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [
                        {
    "id": "group",
 "type": "autocomplete",
 "name": "Group",
 "url": "/group",
 "form": "GroupForm",
 "width": 2
},

{
    "id": "activity",
 "type": "autocomplete",
 "name": "Activity",
 "url": "/activity",
 "form": "ActivityForm",
 "width": 2
},

                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": true
                        },

                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",

                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "id":   "friends",
                            "type": "autocomplete",
                            "name": "Friends",
                            "url": "/friends",

                            
                            "form": "FriendsForm",
                            "width": 2
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                           
                            "form": "LocationsForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
            ],
            "pageList": [
                {
                    "id": "groupspage",
                    "elementList": [
                        {
"type": "list",
"icon": "fa-weixin",
"color": "wisteria",
"search": true,
"url": "/group",
"form": {
"form": "GroupForm"
}
},
                    {
                    "type": "backbutton",
                    },
                    {
                    "type": "newButton",
                    "name": "NewGroup",
                    "icon": "fa-weixin",
                    "color": "clouds",
                    "form": {
                    "form": "GroupForm"
                    }
                    }
                    ]
                    },
                    
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "clouds",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-weixin",
                            "color": "carrot",
                            "page": "groupspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-compass",
                            "color": "concrete",
                            "page": "locationspage",
                        },
                        {
                            "type": "button",
                            "name": "Activity",
                            "icon": "fa-football-ball",
                            "color": "pumpkin",
                            "page": "activitypage",
                        },
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/friend",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "clouds",
                            "search": true,
                            "url": "/location",
                            "form": {
                                "form": "LocationForm"
              }
                        },
                    ]
                },
                {
                    "id": "activitypage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewActivity",
                            "icon": "fa-home",
                            "color": "clouds",
                            "width": 2,
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "pumpkin",
                            "search": true,
                            "url": "/activity",
                            "form": {
                                "form": "ActivityForm"
                            }
                    
                  },
                
                    ]
                },
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
