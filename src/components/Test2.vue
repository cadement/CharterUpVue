<script>
const rates = {
    Charter: { Daily: 1000.00, Hourly: 400.00, Distance: 3.50 },
    "Mini Bus": { Daily: 925.00, Hourly: 360.00, Distance: 3.25 },
    Sprinter: { Daily: 850.00, Hourly: 320.00, Distance: 3.00 },
    "Party Bus": { Daily: 775.00, Hourly: 280.00, Distance: 2.75 },
    Sedan: { Daily: 700.00, Hourly: 240.00, Distance: 2.50 },
    SUV: { Daily: 625.00, Hourly: 200.00, Distance: 2.25 },
    Limousine: { Daily: 550.00, Hourly: 160.00, Distance: 2.00 },
    Trolley: { Daily: 475.00, Hourly: 120.00, Distance: 1.75 }
};

const vehicleTypes = Object.keys(rates);
const pricingMethods = Object.keys(rates.Charter);

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

export default {
    data: () => ({
        vehicleTypes: Object.keys(rates),
        pricingMethods: Object.keys(rates.Charter),
        numberOfVehicles: 1,
        vehicleType: vehicleTypes[0],
        pricingMethod: pricingMethods[0],
        pricingUnits: 0
    }),
    computed: {
        quote() {
            return formatter.format(this.numberOfVehicles * rates[this.vehicleType][this.pricingMethod] * this.pricingUnits);
        }
    }
};
</script>

<template>
    <div>
        <h2>Quote Engine</h2>
        <p>
            <label for="numberOfVehicles">Number of Vehicles:&nbsp;</label>
            <input v-model="numberOfVehicles" />
        </p>
        <p>
            <label for="vehicleType">Vehicle Type:&nbsp;</label>
            <select v-model="vehicleType">
                <option disabled value="">Please select one</option>
                <option v-for="item in vehicleTypes" :value="item">{{ item }}</option>
            </select>
        </p>
        <p>
            <label for="pricingMethod">Pricing Method:&nbsp;</label>
            <select v-model="pricingMethod">
                <option disabled value="">Please select one</option>
                <option v-for="item in pricingMethods" :value="item">{{ item }}</option>
            </select>
        </p>
        <p>
            <label for="pricingUnits">Pricing Units:&nbsp;</label>
            <input v-model="pricingUnits" />
        </p>
        <p>
            <label for="quote">Quote:&nbsp;</label>
            {{ quote }}
        </p>
    </div>
</template>