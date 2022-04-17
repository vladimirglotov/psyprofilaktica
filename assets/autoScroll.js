
export const autoScrollToNode = (ctx, selector, modal = false) => {
    ctx.$nextTick(() => {
        const whereToScroll = document.querySelector(selector)
        if (whereToScroll) {
            if (modal) {
                whereToScroll.scrollIntoView({
                    block: 'center',
                    behavior: 'smooth'
                })
            } else {
                window.scrollTo({
                    top: whereToScroll.offsetTop -25,
                    behavior: 'smooth'
                })
            }
        }
    })
}