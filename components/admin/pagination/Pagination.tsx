
type PaginationProps = {
    size:number,
    currentPage:number,
    startFrom:number,
    maxPage:number,
    onClick:(page:number)=>void
    enableLast:boolean,
    enableFirst:boolean,

}
/**
 * @param {number} size size of the pagination
 * @param {number} currentPage current page of the pagination. displayed size is +1 higher.
 * @param {number} startFrom start page of the pagination. initial value is 1.
 * @param {number} maxPage maximum page size. required.
 * @param {function} onClick callback function when page is clicked.
 * @param {boolean} enableLast option that enable to go last page. 
 * @param {boolean} enableFirst option that enable to go first page.
 */
const Pagination = ({
    size=10,
    currentPage=1,
    startFrom =1,
    maxPage,
    onClick,
    enableFirst=false,
    enableLast=false
}:PaginationProps)=>{
    
    console.log("current page",currentPage,"max page",maxPage)
    return(
        <div>
            {enableFirst && <button className="pagination-button pagination-button-strongest-color" onClick={()=>onClick(1)}>&laquo;</button>}
            {currentPage>0 && <button  className="pagination-button pagination-button-strong-color" onClick={()=>onClick(currentPage)}>prev</button>}
            {Array.from({length:size},(_,i)=>i+startFrom).map((page)=>{
                if(page>maxPage) return null;
                if (page===currentPage+1) return <button className="pagination-button pagination-button-strong-color" onClick={()=>onClick(page)}>{page}</button>
                return <button className="pagination-button pagination-button-normal-color" onClick={()=>onClick(page)}>{page}</button>
            })}
            {currentPage<maxPage-1 && <button className="pagination-button pagination-button-strong-color" onClick={()=>onClick(currentPage+2)}>next</button>}
            {enableLast && <button className="pagination-button pagination-button-strongest-color" onClick={()=>onClick(maxPage)}>&raquo;</button>}
            <style jsx>
                {`
                
                .pagination-button {
                    margin:0px 2px;
                    color: var(--dl-color-gray-white);
                    font-size: 1.2em;
                    border:none;
                    border-radius:4px;
                    padding: 4px 8px;
                }
                .pagination-button:hover
                {
                    cursor:pointer;
                }

                .pagination-button-strongest-color{
                    background-color:var(--dl-color-blue-blue700);
                }
                .pagination-button-strongest-color:hover{
                    background-color:var(--dl-color-blue-blue800);
                }
                .pagination-button-strong-color{
                    background-color: var(--dl-color-blue-blue600);
                }
                .pagination-button-strong-color:hover{
                    background-color: var(--dl-color-blue-blue700);
                }
                

                .pagination-button-normal-color{
                    background-color: var(--dl-color-blue-blue500);
                }
                .pagination-button-normal-color:hover{
                    background-color: var(--dl-color-blue-blue600);
                }
                `}

                    
            </style>

        </div>
    )
    


}


export default Pagination