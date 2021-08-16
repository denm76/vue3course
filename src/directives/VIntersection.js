export default {
    mounted(element, binding){
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries, observer) => {
            if(entries[0].isIntersecting){
                binding.value(); //this.loadMorePosts();
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(element);//this.$refs.observer
    },
    name:'intersection'
}