const pricingUnits = document.querySelectorAll('.js-pricing-unit');
pricingUnits.forEach(pricingUnit => {
    pricingUnit.addEventListener('click', function() {
        pricingUnits.forEach(unit => {
            unit.classList.remove('pricing-unit-activated');
        });
        this.classList.add('pricing-unit-activated');
    });
});
