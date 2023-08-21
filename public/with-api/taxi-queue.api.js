document.addEventListener('alpine:init', () => {

    Alpine.data('TaxiQueue', () => {

        return {
			passengerQueue: 0,
			taxiQueue: 0,
			departCoun:0,
            version: 'api-1.0',
            init() {
                axios
                    .get('/api/passenger/queue')
                    .then(result => {
                        // an example API call
						console.log(result.data);
                        this.passengerQueue = result.data.queueCount
                    });


					this.taxiQueueLength()
					
            },
            joinQueue() {
				axios.post('/api/passenger/join')
				this.init()
            },
            leaveQueue() {
				axios.post('/api/passenger/leave')
				this.init()
            },

            joinTaxiQueue() {
				axios.post('/api/taxi/join')
				this.taxiQueueLength()
            },

            queueLength() {
				axios.get('/api/passenger/queue')
				.then (result => {
					this.passengerQueue =result.data.queueCount
				})
            },

            taxiQueueLength() {
				axios.get('/api/taxi/queue')
				.then (result => {
					console.log(result);
					this.taxiQueue =result.data.queueCount
				})
            },

            taxiDepart() {
				axios.post('/api/taxi/depart')
				.then (result => {
					this.departCoun =result.data.queueCount
					this.init()
				})
				//if (this.passengerQueue >= 12 && this.taxiQueue > 0) {
					//this.passengerQueue -= 12;
					//this.taxiQueue--;
					//this.departCoun+=1;
				//}

            }
        }
    });

});
