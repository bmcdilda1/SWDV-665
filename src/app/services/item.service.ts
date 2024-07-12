import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'http://localhost:5000/items';

  async getItems() {
    const response = await axios.get(this.apiUrl);
    return response.data;
  }

  async addItem(item) {
    const response = await axios.post(this.apiUrl, item);
    return response.data;
  }

  async deleteItem(id) {
    const response = await axios.delete(`${this.apiUrl}/${id}`);
    return response.data;
  }
}
