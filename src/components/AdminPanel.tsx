import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, EditIcon, TrashIcon, SaveIcon, XIcon, ImageIcon, EyeIcon } from 'lucide-react';

interface GalleryItem {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: ''
  });

  // Load gallery items from localStorage on component mount
  useEffect(() => {
    const savedItems = localStorage.getItem('galleryItems');
    if (savedItems) {
      setGalleryItems(JSON.parse(savedItems));
    } else {
      // Default items if none exist
      const defaultItems: GalleryItem[] = [
        {
          id: 1,
          name: 'Metall',
          image: '/metall.webp',
          description: 'Hochwertige Gravuren auf Edelstahl, Aluminium und weiteren Metallen.'
        },
        {
          id: 2,
          name: 'Holz',
          image: '/holz.jpg',
          description: 'Präzise Gravuren auf nachhaltigem Holz für besondere Produkte.'
        },
        {
          id: 3,
          name: 'Leder',
          image: '/leder.webp',
          description: 'Stilvolle Gravuren auf Leder für exklusive Accessoires.'
        },
        {
          id: 4,
          name: 'Acryl / Glas',
          image: '/glas.webp',
          description: 'Klare Gravuren für moderne und elegante Designs.'
        }
      ];
      setGalleryItems(defaultItems);
      localStorage.setItem('galleryItems', JSON.stringify(defaultItems));
    }
  }, []);

  // Save gallery items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('galleryItems', JSON.stringify(galleryItems));
    // Dispatch custom event to notify GallerySection of changes
    window.dispatchEvent(new CustomEvent('galleryItemsUpdated', { detail: galleryItems }));
  }, [galleryItems]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddNew = () => {
    setIsAddingNew(true);
    setEditingItem(null);
    setFormData({ name: '', image: '', description: '' });
  };

  const handleEdit = (item: GalleryItem) => {
    setEditingItem(item);
    setIsAddingNew(false);
    setFormData({
      name: item.name,
      image: item.image,
      description: item.description
    });
  };

  const handleSave = () => {
    if (!formData.name.trim() || !formData.image.trim() || !formData.description.trim()) {
      alert('Bitte füllen Sie alle Felder aus.');
      return;
    }

    if (isAddingNew) {
      const newItem: GalleryItem = {
        id: Math.max(...galleryItems.map(item => item.id), 0) + 1,
        name: formData.name.trim(),
        image: formData.image.trim(),
        description: formData.description.trim()
      };
      setGalleryItems(prev => [...prev, newItem]);
    } else if (editingItem) {
      setGalleryItems(prev =>
        prev.map(item =>
          item.id === editingItem.id
            ? { ...item, name: formData.name.trim(), image: formData.image.trim(), description: formData.description.trim() }
            : item
        )
      );
    }

    handleCancel();
  };

  const handleCancel = () => {
    setIsAddingNew(false);
    setEditingItem(null);
    setFormData({ name: '', image: '', description: '' });
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Sind Sie sicher, dass Sie diesen Eintrag löschen möchten?')) {
      setGalleryItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setFormData(prev => ({ ...prev, image: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // If used as a page (isOpen=true and onClose is empty), render without modal wrapper
  const isPageMode = isOpen && (!onClose || onClose.toString() === '() => {}');

  if (isPageMode) {
    return (
      <div className="w-full">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Gallery Management</h2>
          <p className="text-gray-400">Verwalten Sie die Galerie-Elemente Ihrer Website</p>
        </div>

        {/* Content */}
        <div className="space-y-6">
              {/* Add New Button */}
              <div className="mb-6">
                <motion.button
                  onClick={handleAddNew}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <PlusIcon className="w-5 h-5" />
                  Neues Element hinzufügen
                </motion.button>
              </div>

              {/* Form for Adding/Editing */}
              <AnimatePresence>
                {(isAddingNew || editingItem) && (
                  <motion.div
                    className="mb-6 p-6 bg-gray-800 rounded-lg border border-gray-700"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      {isAddingNew ? 'Neues Element hinzufügen' : 'Element bearbeiten'}
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                            placeholder="z.B. Metall, Holz, etc."
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-300">Bild URL oder Upload</label>
                          <div className="space-y-2">
                            <input
                              type="text"
                              name="image"
                              value={formData.image}
                              onChange={handleInputChange}
                              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                              placeholder="/pfad/zum/bild.jpg oder https://..."
                            />
                            <div className="flex items-center gap-2">
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                                id="imageUpload"
                              />
                              <label
                                htmlFor="imageUpload"
                                className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors cursor-pointer"
                              >
                                <ImageIcon className="w-4 h-4" />
                                Bild hochladen
                              </label>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-300">Beschreibung</label>
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-white resize-none"
                            placeholder="Beschreibung des Materials und der Gravurmöglichkeiten..."
                          />
                        </div>
                      </div>

                      {/* Preview */}
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Vorschau</label>
                        <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                          {formData.image && (
                            <img
                              src={formData.image}
                              alt={formData.name || 'Vorschau'}
                              className="w-full h-40 object-cover rounded-md mb-3"
                              onError={(e) => {
                                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0xMDAgNTBMMTUwIDEwMEgxMDBWMTUwSDEwMFYxMDBINTBMMTAwIDUwWiIgZmlsbD0iIzZCNzI4MCIvPgo8L3N2Zz4K';
                              }}
                            />
                          )}
                          <h4 className="font-semibold text-white">{formData.name || 'Material Name'}</h4>
                          <p className="text-gray-300 text-sm mt-1">{formData.description || 'Beschreibung wird hier angezeigt...'}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <motion.button
                        onClick={handleSave}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <SaveIcon className="w-4 h-4" />
                        Speichern
                      </motion.button>
                      <motion.button
                        onClick={handleCancel}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <XIcon className="w-4 h-4" />
                        Abbrechen
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Gallery Items List */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-white mb-2">{item.name}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{item.description}</p>
                      <div className="flex gap-2">
                        <motion.button
                          onClick={() => handleEdit(item)}
                          className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <EditIcon className="w-3 h-3" />
                          Bearbeiten
                        </motion.button>
                        <motion.button
                          onClick={() => handleDelete(item.id)}
                          className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <TrashIcon className="w-3 h-3" />
                          Löschen
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {galleryItems.length === 0 && (
                <div className="text-center py-12">
                  <EyeIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">Keine Gallery-Elemente vorhanden</p>
                  <p className="text-gray-500">Klicken Sie auf "Neues Element hinzufügen" um zu beginnen</p>
                </div>
              )}
            </div>
          </div>
        );
      }

      // Modal mode
      return (
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
              />
              
              <motion.div
                className="bg-gray-900 rounded-lg w-full max-w-6xl max-h-[90vh] relative z-10 overflow-hidden border border-gray-700"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              >
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-700">
                  <h2 className="text-2xl font-bold text-white">Gallery Admin Panel</h2>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-400 hover:text-white"
                  >
                    <XIcon className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                  {/* Add New Button */}
                  <div className="mb-6">
                    <motion.button
                      onClick={handleAddNew}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <PlusIcon className="w-5 h-5" />
                      Neues Element hinzufügen
                    </motion.button>
                  </div>

                  {/* Form for Adding/Editing */}
                  <AnimatePresence>
                    {(isAddingNew || editingItem) && (
                      <motion.div
                        className="mb-6 p-6 bg-gray-800 rounded-lg border border-gray-700"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                      >
                        <h3 className="text-xl font-semibold mb-4 text-white">
                          {isAddingNew ? 'Neues Element hinzufügen' : 'Element bearbeiten'}
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                                placeholder="z.B. Metall, Holz, etc."
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium mb-2 text-gray-300">Bild URL oder Upload</label>
                              <div className="space-y-2">
                                <input
                                  type="text"
                                  name="image"
                                  value={formData.image}
                                  onChange={handleInputChange}
                                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                                  placeholder="/pfad/zum/bild.jpg oder https://..."
                                />
                                <div className="flex items-center gap-2">
                                  <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                    id="imageUploadModal"
                                  />
                                  <label
                                    htmlFor="imageUploadModal"
                                    className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors cursor-pointer"
                                  >
                                    <ImageIcon className="w-4 h-4" />
                                    Bild hochladen
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-medium mb-2 text-gray-300">Beschreibung</label>
                              <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows={4}
                                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-white resize-none"
                                placeholder="Beschreibung des Materials und der Gravurmöglichkeiten..."
                              />
                            </div>
                          </div>

                          {/* Preview */}
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-300">Vorschau</label>
                            <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                              {formData.image && (
                                <img
                                  src={formData.image}
                                  alt={formData.name || 'Vorschau'}
                                  className="w-full h-40 object-cover rounded-md mb-3"
                                  onError={(e) => {
                                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0xMDAgNTBMMTUwIDEwMEgxMDBWMTUwSDEwMFYxMDBINTBMMTAwIDUwWiIgZmlsbD0iIzZCNzI4MCIvPgo8L3N2Zz4K';
                                  }}
                                />
                              )}
                              <h4 className="font-semibold text-white">{formData.name || 'Material Name'}</h4>
                              <p className="text-gray-300 text-sm mt-1">{formData.description || 'Beschreibung wird hier angezeigt...'}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                          <motion.button
                            onClick={handleSave}
                            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <SaveIcon className="w-4 h-4" />
                            Speichern
                          </motion.button>
                          <motion.button
                            onClick={handleCancel}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <XIcon className="w-4 h-4" />
                            Abbrechen
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Gallery Items List */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {galleryItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-white mb-2">{item.name}</h3>
                          <p className="text-gray-300 text-sm mb-4 line-clamp-2">{item.description}</p>
                          <div className="flex gap-2">
                            <motion.button
                              onClick={() => handleEdit(item)}
                              className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <EditIcon className="w-3 h-3" />
                              Bearbeiten
                            </motion.button>
                            <motion.button
                              onClick={() => handleDelete(item.id)}
                              className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <TrashIcon className="w-3 h-3" />
                              Löschen
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {galleryItems.length === 0 && (
                    <div className="text-center py-12">
                      <EyeIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-400 text-lg">Keine Gallery-Elemente vorhanden</p>
                      <p className="text-gray-500">Klicken Sie auf "Neues Element hinzufügen" um zu beginnen</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
                 </AnimatePresence>
       );
 };
 
 export default AdminPanel; 