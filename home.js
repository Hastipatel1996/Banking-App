function Home() {
    return(
        <Card
            bgcolor="light"
            txtcolor="black"
            header="BadBank Landing Page"
            title="Welcome to the Bank"
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
            />
    );
}