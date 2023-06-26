"use client";

import React, { useState } from 'react';
import { UploadButton } from '@/utils/uploadthing';
// import updateName from 'hooks/UpdateName';

type FileData = {
  fileUrl: string;
  fileKey: string;
};

type ResType = FileData[] | undefined;

const EditProfileTab = ({ user }: any) => {
  const [Picture, setPicture] = useState<ResType>(undefined);
  const [User] = useState(user);
  const [Name, setName] = useState('');

  function updateForm(e: React.FormEvent) {
    e.preventDefault(); // Impede o comportamento padrão do envio do formulário
    if (Name.trim() !== '') {
      console.log(Name);
      // updateName(user, Name);
      alert('Nome atualizado com sucesso!')
    } else {
      alert('Digite um novo nome de usuário!');
    }
  }

  return (
    <div className="bg-gray-900 rounded-lg p-8">
      <h2 className="text-white text-lg font-semibold mb-4">Editar Perfil</h2>
      <form onSubmit={updateForm}>
        <div className="flex items-center mb-4">
          <img
            className="w-16 h-16 rounded-full mr-4"
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
          />
          <div>
            <label htmlFor="profile_picture" className="text-white font-semibold mb-2 block">
              Foto de perfil
            </label>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                console.log(res);
                setPicture(res);
                console.log(Picture);
                alert('Upload concluído');
              }}
              onUploadError={(error: Error) => {
                console.log('Erro');
                alert(`ERRO! ${error.message}`);
              }}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="text-white font-semibold mb-2 block">
            Nome de Usuário
          </label>
          <input
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            id="username"
            name="username"
            className="w-full p-2 rounded-lg bg-gray-800 text-white"
            placeholder="Digite seu novo nome de usuário"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Salvar
          </button>
          
        </div>
      </form>
      <p className='text-white mt-6'>Disclamer:As Alterações só seram alteradas no seu proximo login!</p>
    </div>
  );
};

export default EditProfileTab;