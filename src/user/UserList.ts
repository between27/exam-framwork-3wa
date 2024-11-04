import { View } from "../framework/views/View";
import { User, UserProps } from "./User";

export class UserList extends View<User, UserProps> {
    public collection = User.buildCollection()

    
  template(): string {
    this.collection.fetch()
    let data = this.collection.models
    console.log(data.length)
    return `
            <div>
                <select>
                
                    
                    
                </select>
            </div>
    `;
  }
}
