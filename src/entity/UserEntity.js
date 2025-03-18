export default class UserEntity {

    constructor(id, name, password){
        this.id = id
        this.name = name
        this.password = password
    }

    static fromJSON(json){
        return new UserEntity(json.id, json.name, json.password)
    }

}