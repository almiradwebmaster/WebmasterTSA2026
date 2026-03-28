// Diversity Pie Chart
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('diversityChart');
    
    if (ctx) {
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    'Asian',
                    'White',
                    'Hispanic',
                    'African American',
                    'Two or More Races',
                    'Other'
                ],
                datasets: [{
                    data: [32, 35, 15, 8, 7, 3],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                        '#9966FF',
                        '#FF9F40'
                    ],
                    borderColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                        '#9966FF',
                        '#FF9F40'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: {
                                family: "'Inter', sans-serif",
                                size: 13
                            },
                            padding: 15,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                }
            }
        });
    }
});
