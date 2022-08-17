document$.subscribe(
    function() {
        const tables = document.querySelectorAll("article table:not([class])")
        tables.forEach(function(table) { new Tablesort(table) })
    }
)
