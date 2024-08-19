const countries = [
    {
        name: '미국',
        gold: 132,
        silver: 0,
        bronze: 0,
    },
    {
        name: '대한민국',
        gold: 123,
        silver: 1,
        bronze: 44,
    },
]

export const List = () => {
    return (
        countries.map(country => {
            return (
                <div>{Object.values(country).map(item => <span style={{ marginLeft: '30px' }}>{item}</span>)}</div>
            )
        })
    )

}