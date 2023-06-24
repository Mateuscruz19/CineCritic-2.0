"use client";

import React from 'react';

import "@uploadthing/react/styles.css";
 
import { UploadButton } from "@/utils/uploadthing";

const EditProfileTab = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-8">
    <h2 className="text-white text-lg font-semibold mb-4">Editar Perfil</h2>
    <form>
      <div className="flex items-center mb-4">
        <img className="w-16 h-16 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Profile Picture"/>
        <div>
          <label htmlFor="profile_picture" className="text-white font-semibold mb-2 block">Foto de perfil</label>
          <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          console.log('Erro')
          alert(`ERROR! ${error.message}`);
        }}
      />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="username" className="text-white font-semibold mb-2 block">Nome de Usuário</label>
        <input type="text" id="username" name="username" className="w-full p-2 rounded-lg bg-gray-800 text-white" placeholder="Digite seu nome de usuário"/>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="text-white font-semibold mb-2 block">Senha</label>
        <input type="password" id="password" name="password" className="w-full p-2 rounded-lg bg-gray-800 text-white" placeholder="Digite sua senha"/>
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">Salvar</button>
      </div>
    </form>
  </div>
  );
};

export default EditProfileTab;