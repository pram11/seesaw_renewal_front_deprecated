
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
export default const Pagination = ({
    size=10,
    currentPage=0,
    startFrom =1,
    maxPage,
    onClick,
    enableFirst=false,
    enableLast=false
}:PaginationProps)=>{
    

    return(
        <div>
            {enableFirst && <button onClick={()=>onClick(1)}>first</button>}
            {currentPage>0 && <button onClick={()=>onClick(currentPage-1)}>prev</button>}
            {Array.from({length:size},(_,i)=>i+startFrom).map((page)=>{
                if(page>maxPage) return null;
                return <button onClick={()=>onClick(page)}>{page}</button>
            })}
            {currentPage<size-1 && <button onClick={()=>onClick(currentPage+1)}>next</button>}
            {enableLast && <button onClick={()=>onClick(maxPage)}>last</button>}
        </div>
    )
    


}
