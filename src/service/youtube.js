import axios from 'axios';

class Youtube{
    constructor(key){
        //youtube와 통신하는 base youtuve client를 만듬.
        this.youtube = axios.create({
            baseURL:'https://youtube.googleapis.com/youtube/v3',
            params:{key:key}, //key는 받아온 key를 할당한다.
        })
    }

    async mostPopular(){
        const response = await this.youtube.get('videos',{
            params:{
                part:'snippet',
                chart:'mostPopular',
                maxResults:25,
            }
        })
        return response.data.items;
    }


    async search(query){
        const response = await this.youtube.get('search',{
            params:{
                part:'snippet',
                maxResults:25,
                type:'video',
                q:query,
            }
        })
       return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}
export default Youtube;