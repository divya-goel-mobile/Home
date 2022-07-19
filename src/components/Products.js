const Products = () => {
    const products = [
        { id: 1, name: 'Reservoir Dogs', image:"https://www.prudential.com/wps/wcm/connect/8f1cabc4-c4bb-4ee4-83c6-9a6fd38200c7/imp-pc-a-h-pru-advisors-v2-720x500.png?MOD=AJPERES&CVID=kYy0OQb" },
        { id: 2, name: 'Airplane', image:"https://www.prudential.com/wps/wcm/connect/bf86d110-4dbf-4342-b030-625d41d6e1ae/imp-pc-a-h-life-insurance-v2-720x500.png?MOD=AJPERES&CVID=kYy0JYg" },
        { id: 3, name: 'Doctor Zhivago', image:"https://www.prudential.com/wps/wcm/connect/beec6c5b-3a94-4a1b-9230-dfca0ca9daab/imp-pc-a-h-annuities-v2-720x500.png?MOD=AJPERES&CVID=kYy04FB" },
        { id: 4, name: 'Memento', image:"https://www.prudential.com/wps/wcm/connect/5a4d1aa8-eb69-46bc-b85d-2fc76cfc1127/imp-pc-a-h-prudential-advisors-1110x620.jpg?MOD=AJPERES&CVID=kY37Ajl" },
      ];
      return (
        <>
         <h1 style={{ marginTop: 70, marginBottom: 20, textAlign:"center" }}>PRODUCTS</h1>

        <div style={{display:"flex", overflow: 'auto'}}>
             {products.map(data => (
                 <Card key={data.id} img={data.image} />
            ))}
        </div>
        </>
      );
}

const Card = ({ img }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                color: "gray",
                marginRight: 30
            }}
        >
            <img
                src={img}
                style={{
                    width: 120,
                    height: 120,
                    border: "1px solid lightgray",
                    padding: 7,
                    marginBottom: 20,
                    borderRadius: 70,
                    objectFit:"contain"
                }}
            />
            <p>
                Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
                Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
                tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
                fringilla massa. Etiam hendrerit dolor eget rutrum
            </p>
        </div>
    );
};
export default Products;