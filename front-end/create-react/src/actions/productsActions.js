import axios from 'axios'
import { productsFail, productsRequest, productsSuccess } from '../slices/productsSlice'

export const getProducts = (keyword, price, categoryFilter, currentPage) =>  async(dispatch) =>{
    try {
        dispatch(productsRequest())
        
        //normal
        let link = `/api/products?page=${currentPage}`

        //Search
       if(keyword){
            //normal search
            if(currentPage === 1 && keyword ){

                //storing the data to local storage
                localStorage.setItem('fristKeyword',keyword)
                link =  link + `&keyword=${keyword}`
            }

            //getting the data from local storage
            let fristKeyword = localStorage.getItem('fristKeyword');

            //checking same keyword to all pages
            if((currentPage>1)   &&  (keyword === fristKeyword)){

                link =  link + `&keyword=${keyword}`
             }
 
            //if in page 2 and searching new keyword
            if((currentPage >1) && (fristKeyword !== keyword)){

                // link = `/api/products?page=${currentPage}&keyword=${keyword}`
                link =  link + `&keyword=${keyword}`
             }
        }

        //price filter
        if(price){

            //storing the data to local storage
            localStorage.setItem('priceMin',price[0])
            localStorage.setItem('priceMax',price[1])

            //getting the data from local storage
            let priceMin = localStorage.getItem('priceMin');
            let priceMax = localStorage.getItem('priceMax');
            

            //normal price Filter
            if(currentPage === 1 && price ){

                link =  link + `&price[gte]=${price[0]}00&price[lte]=${price[1]}00` 
            }

            //checking same price to all pages
            if((currentPage>1)   &&  (priceMin === price[0]) &&  (priceMax === price[1])){

                link =  link + `&price[gte]=${price[0]}00&price[lte]=${price[1]}00` 
             }

             // if in page 2 and searching new keyword
            if((currentPage >1) && ((priceMin !== price[0]) ||  (priceMax !== price[1]))){

                link =  link + `&price[gte]=${price[0]}00&price[lte]=${price[1]}00` 

             }

        }

        if(categoryFilter){

            //converting an array to string 
            let categoryConvertToString = categoryFilter.map((x)=>`category=${x}`)
            categoryConvertToString = categoryConvertToString.toString().replaceAll(",", '&')
                
            //storing the data to local storage
            localStorage.setItem('localStorageCategoryFilter',categoryConvertToString)
            
            //getting the data from local storage
            let localStorageCategoryFilter = localStorage.getItem('localStorageCategoryFilter');

            //normal category Filter
            if(currentPage === 1 && categoryConvertToString ){

                link = link+"&"+categoryConvertToString  
            }

            //checking same category to all pages
            if((currentPage>1)   &&  (categoryConvertToString === localStorageCategoryFilter)){
                 
                link = link+"&"+categoryConvertToString 
             }
 
            // if in page 2 and searching new keyword
            if((currentPage >1) && (localStorageCategoryFilter !== categoryConvertToString)){

                link = link+"&"+categoryConvertToString
             }
 
        }

        const {data} = await axios.get(link)
        dispatch(productsSuccess(data))
    }
    catch (error) {
        dispatch(productsFail(error.response.data.message))
    }
}