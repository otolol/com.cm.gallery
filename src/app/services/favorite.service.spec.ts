import { FavoritesService } from "./favorites.service"


describe('FavoriteService', () => {
    let service: FavoritesService;
    beforeEach(() => {
        service = new FavoritesService();
        service.clearStorage();
    });
  
    it('should return emtpy array, before favorites is set', () => {
        expect(service.getFavorites()).toEqual([]);
    });

    it('should return array of uniq set favorites', () => {
        expect(service.addFavorite('2')).toEqual(['2']);
    })
   
    it('should not set same image into favorites', () => {
        service.addFavorite('1');
        expect(service.addFavorite('1')).toEqual(['1']);
    })

    it('should remove favorite', () => {
        service.addFavorite('1');
        expect(service.removeFavorite('1')).toEqual([]);
    })
})