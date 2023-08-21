document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {



		return {

			passengerQueue: 0,
			taxiQueue: 0,
			departCoun:0,
			version: 'no-api-1.0',
			joinQueue() {
				//alert('joinQueue')
				this.passengerQueue++;

			},
			leaveQueue() {
				if (this.passengerQueue > 0) {
					this.passengerQueue--;
				}
			},
			joinTaxiQueue() {
				this.taxiQueue++;
				// if (this.passengerQueue >= 12) {
				// 	this.passengerQueue -= 12;
				// }
			},
			queueLength() {
				return passengerQueue;

			},
			taxiQueueLength() {
				return taxiQueue;
			},
			taxiDepart() {
				if (this.passengerQueue >= 12 && this.taxiQueue > 0) {
					this.passengerQueue -= 12;
					this.taxiQueue--;
					this.departCoun+=1;
				}
			}
		}

	});

});