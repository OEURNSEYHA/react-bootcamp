import React, { useState, ChangeEvent } from 'react';

interface UserHistoryItem {
  id: number;
  name: string;
  date: string;
}

const ContainPage: React.FC = () => {
  const [userHistory, setUserHistory] = useState<UserHistoryItem[]>([
    { id: 1, name: 'seyha', date: '2024-04-30' },
    { id: 2, name: 'john', date: '2024-04-29' },
    { id: 3, name: 'alice', date: '2024-04-30' },
    { id: 4, name: 'bob', date: '2024-04-30' }
  ]);

  const [searchTerm, setSearchTerm] = useState<string>('');

  // Filter user history by name
  const filteredHistory = userHistory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group filtered history by date
  const groupedHistory: Record<string, UserHistoryItem[]> = filteredHistory.reduce((acc, currentItem) => {
    const date = currentItem.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(currentItem);
    return acc;
  }, {});

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <header>
        <div className="content-header">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png"
              alt=""
              width="30"
            />
            <span>Downloads</span>
          </div>
          <div className="search-bar">
            <i className="bi bi-search"></i>
            <input type="text" name="" id="" value={searchTerm} placeholder="Search downloads" onChange={handleSearchChange} />
          </div>
          <div className="setting"><i className="bi bi-three-dots-vertical"></i></div>
        </div>
      </header>
      <section className="wrap-page">
        <div style={{ "display": "flex" }}>
          <div style={{ "width": "20px", "height": "20px", "marginLeft": "10px" }}>
            <i className="bi bi-buildings"></i>
          </div>
          Your <a href=""> Profile is managed </a>by sabaicode.com
        </div>

        <div className="content-item">
          {Object.keys(groupedHistory).map(date => (
            <div key={date} className="box-item">
              <h3> {date}</h3>
              {groupedHistory[date].map(item => (
                <div key={item.id} className="item">
                  <div className="img">image</div>
                  <div className="desc">
                    <a href="">{item.name}</a>
                    <span>...https://us-easet-1.console.aws.amazon.com/ jej9300339598958-kljksjfdlk034kmlajd0343034004</span>
                    <i className="bi bi-three-dots-vertical"></i>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </section>
    </>
  );
}

export default ContainPage;
