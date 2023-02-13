import { useState } from "react";

const Section = ({header, description, isVisible, setIsVisible}) => {
  return (
    <div className="m-5 border-2 border-black p-5">
      <h1 className="font-bold text-lg">{header}</h1>
      {isVisible && <p>{description}</p> }
      
      {isVisible ? 
      <button onClick={() => setIsVisible()} className="ml-2 underline">Hide</button> 
      : 
      <button onClick={() => setIsVisible()} className="border px-2 rounded-2xl bg-green-800 hover:bg-green-700 text-white border-green-700">Show</button>}
    </div>
  );
}

const Instamart = () => {

  const [isVisibleSection, setIsVisibleSection] = useState('about');

  return (
    <div>
      <h1 className="font-bold text-2xl ml-5 mt-2">Instamart</h1>
      <Section 
        header={'Instamart About'}
        description={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'} 
        isVisible={isVisibleSection === 'about'}
        setIsVisible={() => setIsVisibleSection(isVisibleSection === 'about' ? '' : 'about')}
      />
      <Section 
        header={'Instamart Careers'}
        description={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'} 
        isVisible={isVisibleSection === 'careers'}
        setIsVisible={() => setIsVisibleSection(isVisibleSection === 'careers' ? '' : 'careers')}
      />
      <Section 
        header={'Instamart Contact Us'}
        description={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'} 
        isVisible={isVisibleSection === 'contact'}
        setIsVisible={() => setIsVisibleSection(isVisibleSection === 'contact' ? '' : 'contact')}
      />
    </div>
  );
};

export default Instamart;
