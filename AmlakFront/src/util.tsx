export default function formatCarrency(num:any){
    return Number(num.toFixed(3)).toLocaleString()
}