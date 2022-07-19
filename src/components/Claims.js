const Claims = () => {
    const Movies = [
        { id: 1, step: 'Step 1', title:"Report Claim", desc:"You can report your claims online, at our branches, at our central office, on our central ClaimCare helpline, through SMS or e-mail", image:"https://img.lovepik.com/element/45000/9859.png_300.png" },
        { id: 2, step: 'Step 2', title:"Process", desc:"Our special ClaimCare team will assess your claim, and inform you in case any further documents need to be submitted ", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKXAn280YKkleedxCE4bKFAweSRkph4BBtg&usqp=CAU" },
        { id: 3, step: 'Step 3', title:"Settle", desc:"Once your claim is intimated and we receive all the relevant documents, we will settle your claim", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKXAn280YKkleedxCE4bKFAweSRkph4BBtg&usqp=CAU" },
      ];
      return (
        <>
         <h1 style={{ marginTop: 70, marginBottom: 20, textAlign:"center" }}>Claim Settlement Process</h1>
        <div style={{display:"flex", justifyContent:"center", marginTop: 40, overflow: 'auto'}}>
             {Movies.map(data => (
                 <Card key={data.id} data={data} />
            ))}
        </div>
        </>
      );
}

const Card = ({ data }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                color: "gray",
                marginRight: 30,
                border: "2px solid red",
                borderRadius: 10,
                padding: 10,
                width: "200px"
            }}
        >
            <img
                src={data.image}
                style={{
                    width: 100,
                    height: 100,
                    padding: 7,
                    borderRadius: 70,
                }}
            />
            <div style={{fontSize: 20, marginBottom: 20}}>{data.step}</div>
            <div style={{fontSize: 25, fontWeight:"bold", marginBottom: 20, color:"red"}}>{data.title}</div>
            <div style={{fontSize: 18, marginBottom: 10}}>{data.desc}</div>
        </div>
    );
};
export default Claims;