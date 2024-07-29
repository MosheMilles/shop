import axios from 'axios';

const API_URL = 'http://localhost:5000/docs';

class DocService {
    getDocs() {
        return axios.get(API_URL);
    }

    createDoc(data) {
        console.log(data)
        return axios.post(API_URL, data);
        
    }
  
    bulkAddDocs(docs) {
        console.log(docs)
        return axios.post(`${API_URL}/bulk`, {docs});
    }
}

export default new DocService();